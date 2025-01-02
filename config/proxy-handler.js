const fs = require('fs');
const path = require('path');
const { logger } = require('./logger');
const { ColorTheme } = require('./colors');

const colors = new ColorTheme();

class ProxyHandler {
    constructor() {
        this.proxies = [];
        this.currentIndex = 0;
        this.proxyFile = path.join(__dirname, 'proxies.txt');
    }

    loadProxies() {
        try {
            const content = fs.readFileSync(this.proxyFile, 'utf8');
            this.proxies = content
                .replace(/\r/g, '')
                .split('\n')
                .map(line => line.trim())
                .filter(Boolean)
                .map(proxy => {
                    try {
                        const url = new URL(proxy);
                        return {
                            protocol: url.protocol.replace(':', ''),
                            host: url.hostname,
                            port: url.port,
                            auth: url.username && url.password ? {
                                username: decodeURIComponent(url.username),
                                password: decodeURIComponent(url.password)
                            } : undefined
                        };
                    } catch (error) {
                        logger.warn(colors.style(`Invalid proxy format: ${proxy}`, 'warning'));
                        return null;
                    }
                })
                .filter(Boolean);

            logger.info(colors.style(`Successfully loaded ${this.proxies.length} proxies`, 'info'));
            return true;
        } catch (error) {
            if (error.code === 'ENOENT') {
                logger.warn(colors.style('proxies.txt not found, will proceed without proxies', 'warning'));
                return false;
            }
            logger.error(colors.style(`Failed to load proxies: ${error.message}`, 'error'));
            return false;
        }
    }

    getNextProxy() {
        if (this.proxies.length === 0) return null;
        
        const proxy = this.proxies[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.proxies.length;
        
        return proxy;
    }

    getCurrentProxy() {
        return this.proxies[this.currentIndex] || null;
    }

    getProxyUrl(proxy) {
        if (!proxy) return null;
        
        const auth = proxy.auth ? 
            `${encodeURIComponent(proxy.auth.username)}:${encodeURIComponent(proxy.auth.password)}@` : 
            '';
            
        return `${proxy.protocol}://${auth}${proxy.host}:${proxy.port}`;
    }

    getAxiosProxyConfig(proxy) {
        if (!proxy) return undefined;
        
        return {
            protocol: proxy.protocol,
            host: proxy.host,
            port: proxy.port,
            auth: proxy.auth
        };
    }

    getWeb3ProxyConfig(proxy) {
        if (!proxy) return undefined;
        
        return this.getProxyUrl(proxy);
    }
}

module.exports = ProxyHandler;
