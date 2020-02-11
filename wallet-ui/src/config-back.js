//开发模式
export const IS_DEV = process.env.NODE_ENV !== 'production';
//链ID
export const API_CHAIN_ID = localStorage.hasOwnProperty('chainID') ? Number(localStorage.getItem('chainID')) : 3;
//燃烧地址的公钥
export const API_BURNING_ADDRESS_PUB = '000000000000000000000000000000000000000000000000000000000000000000';
//运行环境（true:正式环境，false:测试环境）
export const RUN_DEV = false;
//ChainId和资产ID
export const MAIN_INFO = RUN_DEV ? {chainId: 3, assetsId: 1} : {chainId: 4, assetsId: 1};
//运行模式（true:electron窗体模式，false:浏览器模式）
export const RUN_PATTERN = false;
//桌面程序下载路径（main：http://samos.io/download  test：http://file.wallet.nuls.io/download/test）background.js package 手动修改
export const FILE_URL = RUN_DEV ? 'http://samos.io/download' : 'http://beta.samos.io/download/test';
//正式、测试网络的api
export let API_URL = 'https://wallet.samos.io/public';
setInterval(() => {
  API_URL = localStorage.hasOwnProperty("url") && localStorage.getItem('url') !== 'undefined' ? JSON.parse(localStorage.getItem("url")).urls : 'https://wallet.samos.io/public';
}, 500);
//请求最迟时间
export const API_TIME = IS_DEV ? '9000' : '8000';

//默认节点服务列表
const electronData = [
  {
    name: 'Official',
    chainId: MAIN_INFO.assetsId,
    assetId: MAIN_INFO.assetId,
    decimals: 8,
    chainName: RUN_DEV ? 'SAMO' : 'tSAMO',
    urls: RUN_DEV ? 'https://wallet.samos.io/public' : 'https://wallet.samos.io/',
    delay: '10ms',
    selection: true,
    isDelete: false
  },
  {
    name: 'Official',
    chainId: MAIN_INFO.assetsId,
    assetId: MAIN_INFO.assetId,
    decimals: 8,
    chainName: RUN_DEV ? 'SAMO' : 'tSAMO',
    urls: RUN_DEV ? 'https://public1.yqkkn.com' : 'http://tscan.samos.io',
    delay: '10ms',
    selection: false,
    isDelete: false
  }
];
const explorerData = [
  {
    name: 'Official',
    chainId: MAIN_INFO.assetsId,
    assetId: MAIN_INFO.assetId,
    decimals: 8,
    chainName: RUN_DEV ? 'SAMO' : 'tSAMO',
    urls: '/api',
    delay: '10ms',
    selection: true,
    isDelete: false
  },
  {
    name: 'Official',
    chainId: MAIN_INFO.assetsId,
    assetId: MAIN_INFO.assetId,
    decimals: 8,
    chainName: RUN_DEV ? 'SAMO' : 'tSAMO',
    urls: RUN_DEV ? 'https://wallet.samos.io/public' : 'https://wallet.samos.io/',
    delay: '10ms',
    selection: false,
    isDelete: false
  },
  {
    name: 'Official',
    chainId: MAIN_INFO.assetsId,
    assetId: MAIN_INFO.assetId,
    decimals: 8,
    chainName: RUN_DEV ? 'SAMO' : 'tSAMO',
    urls: RUN_DEV ? 'https://public1.yqkkn.com' : 'http://apitn1.scan.samos.io',
    delay: '10ms',
    selection: false,
    isDelete: false
  }
];
export const defaultData = RUN_PATTERN ? electronData : explorerData;

//默认服务节点地址
export const defaultUrl = RUN_PATTERN ? electronData[0] : explorerData[0];
//默认浏览器地址（跳转地址）
export const explorerUrl = RUN_DEV ? 'http://scan.samos.io/' : 'http://tscan.samos.io/';
