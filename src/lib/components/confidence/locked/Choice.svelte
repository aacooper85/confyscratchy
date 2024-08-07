<script lang="ts">
    import { Col, InputGroup, Label } from "@sveltestrap/sveltestrap";

    export let index: number;
    export let value: number;
    export let revealed: boolean;
    export let correct: boolean;

    let style = () => {
        const base = 'my-auto font=monospace px-1';
        if (revealed) {
            if (correct) {
                return base.concat(' text-light bg-success rounded');
            } else if (value > 0 && !correct) {
                return base.concat(' text-danger text-decoration-line-through')
            }
        }
        return base;
    }
</script>

<Col class="col-2">
    <Label class={style()}>{String.fromCharCode(97 + index).toUpperCase()}: {value}</Label>
</Col>