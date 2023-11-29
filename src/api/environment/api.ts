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
        url: "/cTransducer/getTime",
        method: "get",
        params: params,
    });
}

//left2
export function getPieData(params: any) {
    return request({
        url: "/PieChart",
        method: "get",
        params: params,
    });
}