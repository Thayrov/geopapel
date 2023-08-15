import { Button, Flex } from '@chakra-ui/react';

const NavbarButtons = () => {
    return (
        <Flex direction="row">
            <Button as="a" href="#productos" colorScheme="brand.black">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 49 48"
                    fill="none">
                    <path
                        d="M15.7839 37.7977C17.4426 37.7977 18.8015 39.1666 18.8015 40.8575C18.8015 42.5284 17.4426 43.8972 15.7839 43.8972C14.1052 43.8972 12.7463 42.5284 12.7463 40.8575C12.7463 39.1666 14.1052 37.7977 15.7839 37.7977ZM38.2664 37.7977C39.9251 37.7977 41.284 39.1666 41.284 40.8575C41.284 42.5284 39.9251 43.8972 38.2664 43.8972C36.5877 43.8972 35.2287 42.5284 35.2287 40.8575C35.2287 39.1666 36.5877 37.7977 38.2664 37.7977ZM6.69139 4.46243L11.4577 5.18512C12.1371 5.30791 12.6368 5.86956 12.6967 6.554L13.0764 11.0632C13.1364 11.7094 13.656 12.1926 14.2955 12.1926H41.2844C42.5035 12.1926 43.3029 12.6153 44.1022 13.5413C44.9016 14.4673 45.0415 15.7959 44.8616 17.0018L42.9631 30.2074C42.6034 32.7459 40.4451 34.616 37.9071 34.616H16.1041C13.4461 34.616 11.2478 32.5647 11.028 29.9075L9.18944 7.96314L6.17179 7.43974C5.37241 7.29883 4.81285 6.51373 4.95274 5.70851C5.09263 4.88517 5.87203 4.33963 6.69139 4.46243ZM34.7096 19.6389H29.1739C28.3345 19.6389 27.675 20.3032 27.675 21.1487C27.675 21.974 28.3345 22.6585 29.1739 22.6585H34.7096C35.5489 22.6585 36.2084 21.974 36.2084 21.1487C36.2084 20.3032 35.5489 19.6389 34.7096 19.6389Z"
                        fill="#414141"
                    />
                </svg>
            </Button>
        </Flex>
    );
};

export default NavbarButtons;