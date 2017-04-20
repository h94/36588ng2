/**API 回傳 interface */
export interface APIResponse {
    /**回傳狀態 */
    err: boolean;
    /**回傳訊息 */
    err_msg: number;
    /**回傳資料 */
    ret: any;
}