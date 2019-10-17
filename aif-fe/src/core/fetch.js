/**
 * Created by rajasekhar on 03-Dec-18.
 */

import fetch from 'node-fetch';

function localUrl(url) {
    if (url.startsWith('//')) {
        return `https:${url}`;
    }
    if (url.startsWith('http')) {
        return url;
    }
    return url;
}

function localFetch(url, options) {
    return fetch(localUrl(url), options);
}

export { localFetch as default};
