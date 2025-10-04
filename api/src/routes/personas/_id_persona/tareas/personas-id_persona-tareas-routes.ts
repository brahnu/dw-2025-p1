import { Type, type FastifyPluginAsyncTypebox,} from "@fastify/type-provider-typebox";
import { Persona } from "../../../../model/persona.ts";
import { findPersonById } from "../../../../services/personas.ts";

const personasRoutes: FastifyPluginAsyncTypebox = async function (fastify) {
  fastify.get(
    "/",
    {
      schema: {
        tags: ["personas"],
        params: Type.Pick(Persona, ["id_persona"]),
        response: {
          200: Persona,
        },
      },
    },
    async function (req, rep) {
      return findPersonById(req.params.id_persona);
    }
  );
};

export default personasRoutes;
