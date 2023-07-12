"use strict";
function KgTLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.22;
    else
        return parseInt(weight) * 2.22;
}
KgTLbs(10);
KgTLbs('30kg');
//# sourceMappingURL=index.js.map