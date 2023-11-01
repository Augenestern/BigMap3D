import request from "./request";

export function getCemsData(params: any) {
    return request({
        url: "/cems/get",
        method: "get",
        params: params,
    });
}

export function getEleData(params: any) {
    return request({
        url: "/cTransducer/get",
        method: "get",
        params: params,
    });
}