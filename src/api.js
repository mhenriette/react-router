export const getVans = async () => {
  const respo = await fetch("/api/vans");
  if (!respo.ok) {
    throw {
      message: "failed to fetch vans",
      statusText: respo.statusText,
      status: respo.status,
    };
  }

  const data = await respo.json();
  return data.vans;
};
