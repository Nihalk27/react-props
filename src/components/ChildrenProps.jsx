function Card({children, title , color='blue'}){
  const colorClasses = {
    blue : "bg-blue-50 border-blue-500",
    red : "bg-red-50 border-red-500",
    green : "bg-green-50 border-green-500",
    purple : "bg-purple-50 border-purple-500"
  };
  return (
    <div className={`border-l-4 p-6 rounded-lg shadow-md ${colorClasses[color]}`}>
      {title && <h3 className="text-xl font-bold mb-3 text-gray-700">{title}</h3>}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({children,layout='vertical'}){
  const layoutClasses = {
    vertical : "flex flex-col space-y-4",
    horizontal : "flex flex-row flex-wrap gap-4",
    grid : "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return(
    <div className={layoutClasses[layout]}>{children}</div>
  );
}
function ChildrenProps() {
  return (
  <section className="p-8 bg-white rounded-xl shadow-md ">
    <div className="text-gray-800">
    <h2>children prop</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nesciunt repellat incidunt voluptatum unde eius.</p>
    </div>
  <div className="space-y-6">
    <div>
      <h3>card component with children </h3>
      <Container layout="grid">
        <Card title="User title">
          <p className="mb-2">
            <strong>name:</strong>Nihal Kondukwar
          </p>
          <p className="mb-2">
            <strong>email:</strong>nihalkondukwar@gmail.com
          </p>
          <p className="mb-2">
            <strong>role:</strong>Devloper
          </p>
        </Card>
        <Card title="Statistic" color="purple">
          <p className="mb-2">
            <strong>name:</strong>Pranay Gawali
          </p>
          <p className="mb-2">
            <strong>email:</strong>pranay1243@gmail.com
          </p>
          <p className="mb-2">
            <strong>role:</strong>Sales
          </p>
          <button class="bg-green-500 border border-blue-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded transition">
           Info
        </button>
        </Card>
        <Card title="Quick Actions" color="green">
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                  Create New
                </button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
                  View All
                </button>
              </div>
            </Card>
            <Card title="Warning" color="red">
              <p>
                Your trial period ends in 5 days. Please upgrade your account to
                continue using all features.
              </p>
            </Card>
      </Container>
    </div>
  </div>
  </section>
  )
}

export default ChildrenProps
