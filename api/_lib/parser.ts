import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { pathname, query } = parse(req.url || '/', true);
    const { percentage } = (query || {});
    
    const arr = (pathname || '/').slice(1).split('.');
    let extension = '';
    if (arr.length >= 2) {
        extension = arr.pop() as string;
    }

    const parsedRequest: ParsedRequest = {
        fileType: extension === 'jpeg' ? extension : 'png',
        percentage: Number(decodeURIComponent(percentage?.toString() || ""))
    };
    return parsedRequest;
}
