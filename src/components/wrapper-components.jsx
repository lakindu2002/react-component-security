const Detenator = () => {
  return (
    <>
      <button>Detonate Reactor</button>
    </>
  );
};

const verifyPermissions = (permissions, userPermissions) => {
  let isVerified = true;
  if (!permissions || !userPermissions) isVerified = false;
  isVerified = permissions.every((permission) =>
    userPermissions.includes(permission)
  );
  return isVerified;
};

export const Authorizer = ({ permissions, requiredPermissions, children }) => {
  const isAuthorized = verifyPermissions(permissions, requiredPermissions);
  if (isAuthorized) {
    return children;
  }
  return (
    <>
      <h1>Forbidden. No permissions to access</h1>
    </>
  );
};
export const Page = ({ children }) => {
  return (
    <>
      <h1>Nuclear Bomb Management</h1>
      {children}
      <Authorizer
        permissions={[]}
        requiredPermissions={["detonate", "president"]}
      >
        <Detenator />
      </Authorizer>
    </>
  );
};
