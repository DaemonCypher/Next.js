export default function cars({ params }) {
    return (
      <main>
        <div className="font-semibold text-xl ml-10">
       
          I am  {params.cars}
        </div>
      </main>
    );
  }
