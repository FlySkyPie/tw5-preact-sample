/*\
title: $:/development-tool/reloader.js
type: application/javascript
module-type: startup

Used to reload page.
\*/

exports.startup = function () {
    if (!$tw.browser) {
        return;
    }

    fetch('files/timestamps.json')
        .then(res => res.json())
        .then((result) => {
            const { value: currentValue } = result;
            setInterval(async () => {
                const { value: newValue } = await fetch('files/timestamps.json')
                    .then(res => res.json());
                if (currentValue !== newValue) {
                    document.location.reload();
                }
            }, 1000);
        })
};
