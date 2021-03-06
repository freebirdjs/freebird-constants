# freebird-constants
Constants used by freebird framework

The used constants are:

```js
module.exports = {
    EVENTS_TO_TOP: {
        ERROR: 'error',
        ENABLED: 'enabled',
        DISABLED: 'disabled',
        STARTED: 'started',
        STOPPED: 'stopped',
        NET_READY: 'netReady',
        PERMIT_JOIN: 'permitJoin',
        DEV_INCOMING: 'devIncoming',
        DEV_LEAVING: 'devLeaving',
        DEV_REPORTING: 'devReporting',
        NET_CHANGED: 'netChanged',
        STATUS_CHANGED: 'statusChanged',
        DEV_PROPS_CHANGED: 'devPropsChanged',
        DEV_ATTRS_CHANGED: 'devAttrsChanged',
        GAD_INCOMING: 'gadIncoming',
        GAD_LEAVING: 'gadLeaving',
        GAD_REPORTING: 'gadReporting',
        PANEL_CHANGED: 'panelChanged',
        GAD_PROPS_CHANGED: 'gadPropsChanged',
        GAD_ATTRS_CHANGED: 'gadAttrsChanged',
        DEV_BAN_INCOMING: 'bannedDevIncoming',
        DEV_BAN_REPORTING: 'bannedDevReporting',
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
        NcGadWriteReportCfg: '_nc:gadWriteReportCfg',
        NcGadReadReportCfg:'_nc:gadReadReportCfg',
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
    OptionalGadDrvNames: [ 'exec', 'readReportCfg', 'writeReportCfg' ],
    RPC: {
        Interface: {
            REQ: 0,
            RSP: 1,
            IND: 2
        },
        Subsys: {
            net: 0,
            dev: 1,
            gad: 2
        },
        Api: {
            net: {
                getAllDevIds: 0,
                getAllGadIds: 1,
                getDevs: 2,
                getGads: 3,
                getNetcores: 4,
                getBlacklist: 5,
                permitJoin: 6,
                maintain: 7,
                reset: 8,
                enable: 9,
                disable: 10,
                ban: 11,
                unban: 12,
                remove: 13,
                ping: 14
            },
            dev: {
                enable: 32,
                disable: 33,
                read: 34,
                write: 35,
                identify: 36,
                getProps: 37,
                setProps: 38
            },
            gad: {
                enable: 64,
                disable: 65,
                read: 66,
                write: 67,
                exec: 68,
                setReportCfg: 69,
                getReportCfg: 70,
                getProps: 71,
                setProps: 72
            }
        },
        Status: {
            Ok: 200,
            Created: 201,
            Deleted: 202,
            Changed: 204,
            Content: 205,
            BadRequest: 400,
            Unauthorized: 401,
            NotFound: 404,
            MethodNotAllowed: 405,
            Timeout: 408,
            Conflict: 409,
            InternalServerError: 500
        }
    }
};

```
