import Create from "./Create/Create";
import Read from "./Read/Read";

const App = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">CRUD Operation</h1>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Create"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-red-500 rounded-box p-6"
        >
          <Create />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-blue-500 rounded-box p-6"
        >
          <Read />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Update"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-green-500 rounded-box p-6"
        >
          Tab content 3
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Delete"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-yellow-500 rounded-box p-6"
        >
          Tab content 4
        </div>
      </div>
    </div>
  );
};

export default App;
