/**
 * 為 config.js 添加型別資訊，使 ts 能看懂
 * 數值不直接設定在此，是因為 js 不需預編譯方便修改
 */
declare var url: {
    gateway: string,
    lang: string,
    defaultBallType: string
};
export const SharedData = url;