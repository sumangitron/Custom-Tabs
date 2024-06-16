import CustomTabs from "./components/CustomTabs";

const tabsItem = [
  {
    id: 1,
    label: "Tab 1",
    title:
      "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator ... text, and a search for 'lorem ipsum' will uncover",
  },
  {
    id: 2,
    label: "Tab 2",
    title:
      "Generating Random Text. A computer program can easily produce gibberish - especially if it has been provided with garbage beforehand.",
  },
  {
    id: 3,
    label: "Tab 3",
    title:
      "A web application that generates random text that you can use in sample web pages or typography samples.",
  },
];

function App() {
  return (
    <div className="app">
      <CustomTabs tabsItem={tabsItem} />
    </div>
  );
}

export default App;
