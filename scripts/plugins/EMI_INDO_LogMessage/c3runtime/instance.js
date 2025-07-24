const C3 = globalThis.C3;
class EMI_INDO_LogMessageInstance extends globalThis.ISDKInstanceBase {
    constructor() {
        super();
        const properties = this._getInitProperties();
        if (properties) {
        }
    }
    _release() {
        super._release();
    }
    _setTestProperty(n) {
    }
    _getTestProperty() {
    }
    _saveToJson() {
        return {};
    }
    _loadFromJson(o) {
    }
    _LogMessages(message, position, bgcolor, delay) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = this.SetPosition(position);
        notification.style.top = '20px';
        notification.style.right = '-300px';
        notification.style.backgroundColor = bgcolor;
        notification.style.color = 'white';
        notification.style.padding = '20px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        notification.style.transition = 'right 0.5s ease-in-out';
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.style.right = '20px';
            setTimeout(() => {
                notification.style.right = '-300px';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 500);
            }, delay);
        }, 0);
    }
    SetPosition(position) {
        switch (position) {
            case 0:
                return "absolute";
            case 1:
                return "fixed";
            case 2:
                return "relative";
            case 3:
                return "sticky";
        }
    }
}
;
C3.Plugins.EMI_INDO_LogMessage.Instance = EMI_INDO_LogMessageInstance;
