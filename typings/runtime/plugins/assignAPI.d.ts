export const assignAPI: {
    (payload: TreePayload): Promise<import("../utils/middleware").NodePayload>;
    sync(payload: TreePayload): import("../utils/middleware").NodePayload;
};
