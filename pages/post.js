import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p style={{ width: "80vw" }}>
            Aute non proident qui amet deserunt id. Minim sint tempor eiusmod
            velit Lorem. Veniam reprehenderit voluptate laboris anim deserunt
            eiusmod culpa qui sunt commodo ut veniam qui. Aute non commodo ea
            elit eu nostrud ut culpa culpa. Cillum magna laborum ad ut mollit
            sint ex magna. Ad tempor dolore commodo nostrud eu nostrud culpa
            duis minim ut. Non non pariatur occaecat labore aliqua dolor amet
            duis.
        </p>
    </Layout>
);

export default withRouter(Post);
