/**
 * Created by zhoulijun on 2019-09-17.
 */
"use strict";

//链ID
export const API_CHAIN_ID = localStorage.hasOwnProperty('chainID') ? Number(localStorage.getItem('chainID')) : 4;
//燃烧地址的公钥
export const API_BURNING_ADDRESS_PUB = '000000000000000000000000000000000000000000000000000000000000000000';
//运行环境（true:正式环境，false:测试环境）
export const RUN_DEV = false;
//ChainId和资产ID
export const MAIN_INFO = RUN_DEV ? {chainId: 3, assetId: 1} : {chainId: 4, assetId: 1};
//运行模式（true:electron窗体模式，false:浏览器模式）
export const RUN_PATTERN = true;
//桌面程序下载路径
export const FILE_URL = 'http://beta.samos.io/download/test';
//正式、测试网络的api
export let API_URL = 'https://wallet.samos.io/api';
setInterval(() => {
  API_URL = localStorage.hasOwnProperty("url") && localStorage.getItem('url') !== 'undefined' ? JSON.parse(localStorage.getItem("url")).urls : 'https://wallet.samos.io/api';
}, 500);
//请求最迟时间
export const API_TIME = '8000';

//默认节点服务列表
const electronData = [
  {
    name: 'Official',
    chainId: MAIN_INFO.chainId,
    assetId: MAIN_INFO.assetId,
    decimals: 8,
    chainName: RUN_DEV ? 'SAMO' : 'tSAMO',
    urls: RUN_DEV ? 'https://wallet.samos.io/public' : 'https://wallet.samos.io/api',
    delay: '10ms',
    selection: true,
    isDelete: false
  },
  {
    name: 'Official',
    chainId: MAIN_INFO.chainId,
    assetId: MAIN_INFO.assetId,
    decimals: 8,
    chainName: RUN_DEV ? 'SAMO' : 'tSAMO',
    urls: RUN_DEV ? 'https://public1.yqkkn.com' : 'http://beta.public1.yqkkn.com/',
    delay: '10ms',
    selection: false,
    isDelete: false
  }
];
const explorerData = [
  {
    name: 'Official',
    chainId: MAIN_INFO.chainId,
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
    chainId: MAIN_INFO.chainId,
    assetId: MAIN_INFO.assetId,
    decimals: 8,
    chainName: RUN_DEV ? 'SAMO' : 'tSAMO',
    urls: RUN_DEV ? 'https://wallet.samos.io/public' : 'https://twallet.samos.io/api',
    delay: '10ms',
    selection: false,
    isDelete: false
  },
  {
    name: 'Official',
    chainId: MAIN_INFO.chainId,
    assetId: MAIN_INFO.assetId,
    decimals: 8,
    chainName: RUN_DEV ? 'SAMO' : 'tSAMO',
    urls: RUN_DEV ? 'https://public1.yqkkn.com' : 'http://tpublic1.yqkkn.com',
    delay: '10ms',
    selection: false,
    isDelete: false
  }
];
export const defaultData = RUN_PATTERN ? electronData : explorerData;

//默认服务节点地址
export const defaultUrl = RUN_PATTERN ? electronData[0] : explorerData[0];
//默认浏览器地址（跳转地址）
export const explorerUrl = 'http://tscan.samos.io/';
