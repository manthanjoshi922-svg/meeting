async function summarize() {
    const text = document.getElementById("inputText").value;

    const res = await fetch("/summarize", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    });

    const data = await res.json();

    document.getElementById("summary").innerText = data.summary;
    document.getElementById("actions").innerText = data.actions;
    document.getElementById("sentiment").innerText = data.sentiment;
}