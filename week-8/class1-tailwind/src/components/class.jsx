/**
 * tailwind css vs inline css
 * tailwind css is a utility-first CSS framework that provides low-level utility classes to build custom designs.
 * dub.sh check source code
 * very long class names
 * it has many problem but still it is very popular
 * https://www.material-tailwind.com/blog/material-ui-vs-tailwind
 * checkout mui.com or material-ui
 *
 * grid takes the full width. flex takes the width of the content
 * flex is for one dimension. grid is for two dimension.
 * flex is for one direction. grid is for two direction.
 *
 * tw vs bootstrap. tw more funded. maintained. more popular.
 * tw vs bootstrap. tw is more flexible. bootstrap is more opinionated.
 *
 * if you use col-span-x in any of the children in a grid, it means how many columns to span to the right.
 * if you use row-span-x in any of the children in a grid, it means how many rows to span to the bottom.
 */
export default function Class() {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      <h2>flex in in line css in react</h2>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "red" }}>hello</div>
        <div style={{ backgroundColor: "green" }}>hello</div>
        <div style={{ backgroundColor: "yellow" }}>hello</div>
      </div>
      <h2>flex in tw</h2>
      <div className="flex justify-between">
        <div style={{ backgroundColor: "red" }}>hello</div>
        <div style={{ backgroundColor: "green" }}>hello</div>
        <div style={{ backgroundColor: "yellow" }}>hello</div>
      </div>
      <h2>grids inline css react</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        {numbers.map((number) => (
          <div
            key={number}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "1rem",
              margin: "0.5rem",
              borderRadius: "0.5rem",
            }}
          >
            {number}
          </div>
        ))}
      </div>
      <h1> grid in tailwind</h1>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((number) => (
          <div
            key={number}
            className="bg-red-500 text-white p-4 m-2 rounded-lg"
          >
            {number}
          </div>
        ))}
      </div>
      <h1>responsiveness in tw</h1>
      <div className="bg-gray-200 md:bg-blue-500 ">hi</div>
      <h2>responsive flex in tw</h2>
      <div className="flex flex-row md:flex-col">
        <div style={{ backgroundColor: "red" }}>hello</div>
        <div style={{ backgroundColor: "green" }}>hello</div>
        <div style={{ backgroundColor: "yellow" }}>hello</div>
      </div>
    </>
  );
}
