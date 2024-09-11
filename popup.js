document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        
        chrome.cookies.getAll({ url: currentTab.url }, function (cookies) {
            const cookieArray = cookies.map(cookie => ({
                domain: cookie.domain,
                expirationDate: cookie.expirationDate || null,
                hostOnly: cookie.hostOnly,
                httpOnly: cookie.httpOnly,
                name: cookie.name,
                path: cookie.path,
                sameSite: cookie.sameSite || "unspecified",
                secure: cookie.secure,
                session: cookie.session,
                storeId: cookie.storeId || "0",
                value: cookie.value
            }));

            const formattedJson = JSON.stringify(cookieArray, null, 2);
            document.getElementById('cookieOutput').textContent = formattedJson;

            document.getElementById('downloadJsonBtn').addEventListener('click', function () {
                downloadJson(formattedJson, 'cookies.json');
            });
        });
    });
});

function downloadJson(data, filename) {
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
