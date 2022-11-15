let init = async () => {
  let { initialize, render } = (await import("mermaid")).default;
  initialize({
    startOnLoad: false,
  });
  console.log("render", render);
};

init();
