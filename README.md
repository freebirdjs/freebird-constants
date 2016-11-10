# freebird-constants
Constants used by freebird framework

The used constants are:

```js
module.exports = {
    EVENTS_TO_TOP: {
        ERROR: 'error',
        NET_READY: 'netReady',
        PERMIT_JOIN: 'permitJoin',
        STARTED: 'started',
        STOPPED: 'stopped',
        ENABLED: 'enabled',
        DISABLED: 'disabled',
        NET_CHANGED: 'netChanged',
        STATUS_CHANGED: 'statusChanged',
        DEV_PROPS_CHANGED: 'devPropsChanged',
        DEV_ATTRS_CHANGED: 'devAttrsChanged',
        PANEL_CHANGED: 'panelChanged',
        GAD_PROPS_CHANGED: 'gadPropsChanged',
        GAD_ATTRS_CHANGED: 'gadAttrsChanged',
        DEV_INCOMING: 'devIncoming',
        DEV_LEAVING: 'devLeaving',
        DEV_REPORTING: 'devReporting',
        DEV_BAN_INCOMING: 'bannedDevIncoming',
        DEV_BAN_REPORTING: 'bannedDevReporting',
        GAD_INCOMING: 'gadIncoming',
        GAD_LEAVING: 'gadLeaving',
        GAD_REPORTING: 'gadReporting',
        GAD_BAN_INCOMING: 'bannedGadIncoming',
        GAD_BAN_REPORTING: 'bannedGadReporting'
    },
    EVENTS_FROM_BOTTOM: {
        //-----------To Freebird ----------------------
        NcError: '_nc:error',
        NcEnabled: '_nc:enabled',
        NcDisabled: '_nc:disabled',
        NcStarted: '_nc:started',
        NcStopped: '_nc:stopped',
        NcReady: '_nc:ready',
        NcPermitJoin: '_nc:permitJoin',
        NcDevIncoming: '_nc:devIncoming',
        NcDevLeaving: '_nc:devLeaving',
        NcDevNetChanging: '_nc:devNetChanging',
        NcDevReporting: '_nc:devReporting',
        NcGadIncoming: '_nc:gadIncoming',
        NcGadLeaving: '_nc:gadLeaving',
        NcGadReporting: '_nc:gadReporting',
        NcBannedDevIncoming: '_nc:bannedDevIncoming',
        NcBannedDevReporting: '_nc:bannedDevReporting',
        NcBannedGadIncoming: '_nc:bannedGadIncoming',
        NcBannedGadReporting: '_nc:bannedGadReporting',
        //---------------------------------------------
        NcNetBan: '_nc:netBan',
        NcNetUnban: '_nc:netUnban',
        NcNetPing: '_nc:netPing',
        NcDevRead: '_nc:devRead',
        NcDevWrite: '_nc:devWrite',
        NcDevIdentify: '_nc:devIdentify',
        NcGadRead: '_nc:gadRead',
        NcGadWrite: '_nc:gadWrite',
        NcGadExec: '_nc:gadExec',
        NcGadSetReportCfg: '_nc:gadSetReportCfg',
        NcGadGetReportCfg:'_nc:gadGetReportCfg',
        _NcReady: '_nc:_ready',
        //-----------To Freebird ----------------------
        DevError: '_dev:error',
        DevNetChanged: '_dev:netChanged',
        DevPropsChanged: '_dev:propsChanged',
        DevAttrsChanged: '_dev:attrsChanged',
        //---------------------------------------------
        GadError: '_gad:error',
        //-----------To Freebird ----------------------
        GadPanelChanged: '_gad:panelChanged',
        GadPropsChanged: '_gad:propsChanged',
        GadAttrsChanged: '_gad:attrsChanged',
        GadAttrsAppend: '_gad:attrsAppend',
        GadPanelChangedDisabled: '_gad:panelChanged_Disabled'
        //---------------------------------------------
    },
    MandatoryNetDrvNames: [ 'start', 'stop', 'reset', 'permitJoin', 'remove', 'ping' ],
    MandatoryDevDrvNames: [ 'read', 'write' ],
    MandatoryGadDrvNames: [ 'read', 'write' ],
    OptionalNetDrvNames: [ 'ban', 'unban' ],
    OptionalDevDrvNames: [ 'identify' ],
    OptionalGadDrvNames: [ 'exec', 'setReportCfg', 'getReportCfg' ]
};
```