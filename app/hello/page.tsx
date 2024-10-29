import { pinata } from "../lib/pinata";

async function getData() {

  const url = await pinata.gateways
    .createSignedURL({
      cid: "xyz",
      expires: 500,
    })
    .optimizeImage({
      width: 500,
      height: 500,
      format: "webp",
      quality: 70,
    });

  return url;
}

export default async function HelloRoute() {
  const data = await getData();


  return (
    <div>
      <img src={data} alt="image" />
    </div>
  );
}
