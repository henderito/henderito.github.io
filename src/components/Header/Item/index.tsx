import React, { FC } from 'react'
import { IHeaderItemProps } from './types'
import { useTranslations } from 'next-intl';
import { UniqueerLink } from '@/components/Link';

export const HeaderItem: FC<IHeaderItemProps> = ({ labelKey, path, locale, ...rest }) => {
    const t = useTranslations('Home.Header')

    return <UniqueerLink href={`${locale}/${path}`} label={t(labelKey)} {...rest} />
}