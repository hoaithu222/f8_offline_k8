export default function ProductDetail({ params }) {
  const { path } = params;
  const [slug, id] = path;
  return (
    <div>
      <h1>Product Detail</h1>
      <h3>Slug: {slug}</h3>
      <h3>ID: {id}</h3>
    </div>
  );
}
