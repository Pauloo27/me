const mustGetEnv = (name) => {
  const env = process.env[name];
  if (!env) throw new Error(`${name} env is not defined...`);
  return env;
};

export default mustGetEnv;
