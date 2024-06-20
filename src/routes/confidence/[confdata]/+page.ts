/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        base64string: params.confdata
    };
}