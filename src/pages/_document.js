import Document,{Html,Head,Main,NextScript} from "next/document";

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <title>To-doZão - o Seu to-do list preferido!</title>
                <Head>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};