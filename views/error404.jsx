const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img
            src="/images/sunset-at-the-beach.jpg"
            alt="Sunset at the Beach"
          />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/@omgitsyeshi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Yeshi Kangrang
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/magic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
