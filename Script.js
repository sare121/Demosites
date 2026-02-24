function trackPackage() {
    const result = document.getElementById("trackingResult");

    result.innerHTML = `
        <div style="margin-top:30px; text-align:left; max-width:500px; margin:auto;">
            <h4>Status: <span style="color:green;">In Transit</span></h4>
            <p>Last Location: Mumbai Distribution Hub</p>
            <p>Expected Delivery: 26 Feb 2026</p>
        </div>
    `;
}
