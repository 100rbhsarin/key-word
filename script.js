let insert = document.getElementById("insert")


window.addEventListener("keydown", function (event) {
        insert.innerHTML =`

        <div class="key">
            ${event.key === " " ? "space" : event.key}
            <small>event.Key</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.Keycode</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
`
    })