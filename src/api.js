export const getVans = async (id) => {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const respo = await fetch(url);
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

export const getHost = async (id) => {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const respo = await fetch(url);
  if (!respo.ok) {
    throw {
      message: "failed to fetch host vans",
      statusText: respo.statusText,
      status: respo.status,
    };
  }
  const data = await respo.json();
  return data.vans;
};
