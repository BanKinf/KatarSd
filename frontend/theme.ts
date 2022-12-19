import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
    styles: {
        global: (props: any)=>({
            "*": {
                margin:0,
                padding:0,
                outline:0,
                boxSizing:"border-box"
            },
        })
    }
})