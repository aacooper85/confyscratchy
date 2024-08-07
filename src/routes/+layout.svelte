<script lang="ts">
	import {
		NavbarBrand,
		Nav,
		Navbar,
		NavItem,
		NavLink,
        Container
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
	<p><a href="/credits">Credits</a></p>
</Container>
