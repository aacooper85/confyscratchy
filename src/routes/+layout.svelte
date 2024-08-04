<script lang="ts">
	import {
		NavbarBrand,
		Nav,
		Navbar,
		NavItem,
		NavLink,
        Container,
        Card,
	} from "@sveltestrap/sveltestrap";
</script>

<Navbar color="light" light expand="md" container="md">
	<NavbarBrand href="/">ConfyScratchy</NavbarBrand>
	<Nav class="ms-auto" navbar>
		<NavItem>
			<NavLink href="/design/">Design A Card</NavLink>
		</NavItem>
	</Nav>
</Navbar>

<Container>
	<slot></slot>
</Container>

<Container class="text-center">
	<hr>
	<p>
		A rebuild of ConfeeScratchee by <a
			href="https://github.com/ejherzog"
			target="_blank">ejherzog</a
		>
		and <a href="https://github.com/aacooper85">aacooper85</a>.
	</p>
	<p><a href="/credits">Credits</a></p>
</Container>
