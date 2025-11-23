import Header from "../layout/Header/Header";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main className="frame error">
        <h1>An error occurred!</h1>
        <p className="body-text">Could not find this page.</p>
      </main>
    </>
  );
}
