export enum LATENCY_STATUS {
  MEDIUM = 300,
  HIGH = 800,
  NOT_CONNECTED = 0,
}

export enum LANG {
  EN_US = 'en-US',
  ZH_CN = 'zh-CN',
}

export enum CONNECTIONS_TABLE_ACCESSOR_KEY {
  Details = 'details',
  Close = 'close',
  Type = 'type',
  Process = 'process',
  Host = 'host',
  Rule = 'rule',
  Chains = 'chains',
  DlSpeed = 'dlSpeed',
  UlSpeed = 'ulSpeed',
  Download = 'dl',
  Upload = 'ul',
  ConnectTime = 'connectTime',
  SourceIP = 'sourceIP',
  SourcePort = 'sourcePort',
  Destination = 'destination',
}

export enum PROXY_SORT_TYPE {
  DEFAULT = 'defaultsort',
  NAME_ASC = 'nameasc',
  NAME_DESC = 'namedesc',
  LATENCY_ASC = 'latencyasc',
  LATENCY_DESC = 'latencydesc',
}

export enum PROXY_PREVIEW_TYPE {
  AUTO = 'auto',
  DOTS = 'dots',
  BAR = 'bar',
}

export enum RULE_TAB_TYPE {
  RULES = 'rules',
  PROVIDER = 'ruleProvider',
}

export enum PROXY_TAB_TYPE {
  PROXIES = 'proxies',
  PROVIDER = 'proxyProvider',
}

export enum SORT_TYPE {
  HOST = 'host',
  CHAINS = 'chains',
  RULE = 'rule',
  TYPE = 'type',
  CONNECT_TIME = 'connectTime',
  DOWNLOAD = 'download',
  DOWNLOAD_SPEED = 'downloadSpeed',
  UPLOAD = 'upload',
  UPLOAD_SPEED = 'uploadSpeed',
  SOURCE_IP = 'sourceIP',
}

export enum CONNECTION_TAB_TYPE {
  ACTIVE = 'active',
  CLOSED = 'closed',
}

export enum LOG_LEVEL {
  Info = 'info',
  Error = 'error',
  Warning = 'warning',
  Debug = 'debug',
  Silent = 'silent',
}

export enum ROUTE_NAME {
  proxies = 'proxies',
  connections = 'connections',
  logs = 'logs',
  rules = 'rules',
  settings = 'settings',
  profile = 'profile',
}
