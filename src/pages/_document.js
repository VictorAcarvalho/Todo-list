import Document,{Html,Head,Main,NextScript} from "next/document";

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <title>To-doZão - o Seu to-do list preferido!</title>
                <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Freckle+Face&display=swap" rel="stylesheet" /> 
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};