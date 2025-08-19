import { Card } from "@radix-ui/themes";

// import { env } from "../../lib/env";

export const Home = () => {
  // console.log("环境变量", env);
  return (
    <Card className="p-2 m-4">
      <h3 className="">Welcome Home!</h3>
      <div>You are a good developer</div>
    </Card>
  );
};
