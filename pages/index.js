import Footer from "@/src/components/sections/footer";
import Main from "@/src/components/sections/main";
import Navbar from "@/src/components/sections/navbar";
export default function Home({ data }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Main data={data} />
      <Footer />
    </div>
  );
}

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/discover/movie",
  params: {
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: "1",
    sort_by: "popularity.desc",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjI5ZTU0NWYzZDJlMmY5YjgxYWFiZjBlYzViOTI4NCIsInN1YiI6IjY0ZWNiZmNjODM5MDE4MDEzY2RiYjU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q3lJvm-rMMqW6_nKQeWDr_QAW2bYY3PfFAFlFXa0UcQ",
  },
};

export const getStaticProps = async () => {
  try {
    const res = await axios(options);
    const results = res.data.results;
    return {
      props: {
        data: results,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
