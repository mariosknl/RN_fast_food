import { Redirect, Slot } from "expo-router";

const TabsLayout = () => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }
  return <Slot />;
};
export default TabsLayout;
