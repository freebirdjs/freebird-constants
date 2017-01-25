module.exports = {
    EVENTS_TO_TOP: {
        ERROR: 'error',
        READY: 'ready',
        // STARTED: 'started',
        // STOPPED: 'stopped',
        // NET_READY: 'netReady',
        // PERMIT_JOIN: 'permitJoin',
        NC_ENABLED: 'ncEnabled',
        NC_DISABLED: 'ncDisabled',
        NC_STARTED: 'ncStarted',
        NC_STOPPED: 'ncStopped',
        NC_NET_READY: 'ncNetReady',
        NC_PERMIT_JOIN: 'ncPermitJoin',
        DEV_INCOMING: 'devIncoming',
        DEV_LEAVING: 'devLeaving',
        DEV_REPORTING: 'devReporting',
        DEV_NET_CHANGED: 'devNetChanged',
        DEV_STATUS_CHANGED: 'devStatusChanged',
        DEV_PROPS_CHANGED: 'devPropsChanged',
        DEV_ATTRS_CHANGED: 'devAttrsChanged',
        GAD_INCOMING: 'gadIncoming',
        GAD_LEAVING: 'gadLeaving',
        GAD_REPORTING: 'gadReporting',
        GAD_PANEL_CHANGED: 'gadPanelChanged',
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
        NcGadLeaving: '_nc:gadLeaving',         // no use currently
        NcGadReporting: '_nc:gadReporting',
        NcBannedDevIncoming: '_nc:bannedDevIncoming',
        NcBannedDevReporting: '_nc:bannedDevReporting',
        NcBannedGadIncoming: '_nc:bannedGadIncoming',
        NcBannedGadReporting: '_nc:bannedGadReporting',
        //---------------------------------------------
        NcNetBan: '_nc:netBan',
        NcNetUnban: '_nc:netUnban',
        NcNetPing: '_nc:netPing',
        //-----------To Freebird ----------------------
        DevError: '_dev:error',
        DevNetChanged: '_dev:netChanged',
        DevPropsChanged: '_dev:propsChanged',
        DevAttrsChanged: '_dev:attrsChanged',
        // DevPing: '_dev:ping',
        DevRead: '_dev:read',
        DevWrite: '_dev:write',
        DevIdentify: '_dev:identify',
        //---------------------------------------------
        GadError: '_gad:error',
        GadRead: '_gad:read',
        GadWrite: '_gad:write',
        GadExec: '_gad:exec',
        GadReadReportCfg:'_gad:readReportCfg',
        GadWriteReportCfg: '_gad:writeReportCfg',
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
    OptionalGadDrvNames: [ 'exec', 'writeReportCfg', 'readReportCfg' ],
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
                setProps: 38,
                ping: 39,
                remove: 40
            },
            gad: {
                enable: 64,
                disable: 65,
                read: 66,
                write: 67,
                exec: 68,
                readReportCfg: 69,
                writeReportCfg: 70,
                getProps: 71,
                setProps: 72
            }
        },
        Ind: {
            net: {
                error: 128,
                started: 129,
                stopped: 130,
                enabled: 131,
                disabled: 132,
                permitJoining: 133,
                bannedDevIncoming: 134,
                bannedGadIncoming: 135,
                bannedDevReporting: 136,
                bannedGadReporting: 137
            },
            dev: {
                error: 160,
                devIncoming: 161,
                devLeaving: 162,
                netChanged: 163,
                statusChanged: 164,
                propsChanged: 165,
                attrsChanged: 166
            },
            gad: {
                error: 192,
                gadIncoming: 193,
                gadLeaving: 194,
                panelChanged: 195,
                propsChanged: 196,
                attrsChanged: 197,
                attrsReport: 198
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
