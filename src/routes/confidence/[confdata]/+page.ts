/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    console.log(params.confdata);
    return {
        base64string: params.confdata
    };
}