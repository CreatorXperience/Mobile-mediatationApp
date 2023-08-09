import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8080/calm", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: "Mediatation 101",
        },
        {
          title: "Cardio Meditation",
        },
        {
          title: "Inner Exploration",
        },
        {
          title: "Overall wellbeing",
        },
        {
          title: "Yoga for peace",
        },
        {
          title: "Yoga for Joy",
        },
        {
          title: "Testing",
        },
      ])
    );
  }),
];
